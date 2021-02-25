import { Navbar } from "../../containers";
import { render } from "@testing-library/react";

describe("<Navbar /> renders correctly", () => {
  test("<Navbar /> text renders correctly", () => {
    const { getByText } = render(<Navbar />);
    expect(getByText(`MOVIE`)).toBeInTheDocument();
    expect(getByText(`SEARCHER`)).toBeInTheDocument();
  });
});
