import { Search } from "../../components";
import { render, fireEvent } from "@testing-library/react";

describe("<Search /> renders correctly", () => {
  test("<Search /> renders text correctly", () => {
    const { getByText } = render(
      <Search>
        <Search.Text>{"Find video:"}</Search.Text>
      </Search>
    );
    expect(getByText("Find video:")).toBeTruthy();
  });

  test("<Search.Input /> changes  correctly", async () => {
    const titleChange = jest.fn();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      titleChange(e.target.value);
    };

    const { findByTestId } = render(
      <Search.Input onChange={onChange} value={""} />
    );

    const input = await findByTestId("title-input");
    expect(input).toBeTruthy();

    fireEvent.change(input, { target: { value: "test" } });
    expect(titleChange).toHaveBeenCalledWith("test");
  });

  test("<Search.Button /> onClick  correctly", async () => {
    const click = jest.fn();
    const onClick = () => {
      click();
    };

    const { getByText } = render(
      <Search.Button onClick={onClick}>Click</Search.Button>
    );

    const card = getByText("Click");
    fireEvent.click(card);
    expect(click).toHaveBeenCalledTimes(1);
    fireEvent.click(card);
    fireEvent.click(card);
    expect(click).toHaveBeenCalledTimes(3);
  });

  test("<Search /> Select & Options  workscorrectly", async () => {
    const entries = [
      ["key0", "val0"],
      ["key1", "val1"],
      ["key2", "val2"],
    ];

    let changeValue = "";

    const { getAllByTestId, getByTestId } = render(
      <Search>
        <Search.Select
          value={entries[0][1]}
          onChange={(e) => {
            changeValue = e.target.value;
          }}
        >
          {entries.map((option) => (
            <Search.Option name={option[0]} value={option[1]} key={option[0]} />
          ))}
        </Search.Select>
      </Search>
    );

    const form = getByTestId("search-form");
    const select = getByTestId("select");

    fireEvent.change(select, { target: { value: "val1" } });
    fireEvent.submit(form);

    const options = getAllByTestId("select-option");
    expect(options[0]).toBeInTheDocument();
    expect(options[1]).toBeInTheDocument();
    expect(options[2]).toBeInTheDocument();
    expect(changeValue).toBe("val1");
  });
});
