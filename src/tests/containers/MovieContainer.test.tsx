import { MovieContainer } from "../../containers";
import { render, fireEvent } from "@testing-library/react";

describe("<MovieContainer /> renders correctly", () => {
  test("<MovieContainer /> handles close clockorrectly", () => {
    const close = jest.fn();

    const { getByText } = render(
      <MovieContainer
        titleID={"tt0304141"}
        close={() => {
          close();
        }}
        setIsLoading={() => {}}
      />
    );

    const closeBar = getByText("close");
    expect(closeBar).toBeTruthy();
    fireEvent.click(closeBar);
    expect(close).toHaveBeenCalledTimes(1);
  });
});
