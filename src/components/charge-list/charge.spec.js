import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import ChargesListContainer from "./container";

jest.mock("react-redux");
const dispatchMock = jest.fn();
useDispatch.mockReturnValue(dispatchMock);

describe("ChargesListContainer", () => {
  it("should render the components with the empty chargeList", () => {
    useSelector.mockReturnValue({
      chargeList: [],
      loading: false,
      error: false,
    });

    const { getByText, getByPlaceholderText } = render(
      <ChargesListContainer />
    );

    expect(getByPlaceholderText("Buscar")).toBeInTheDocument();
    expect(getByText("Filtrar")).toBeInTheDocument();
  });

  it("should render the components with the filled list", () => {
    useSelector.mockReturnValue({
      chargeList: [
        {
          debitCode: "db65420f-f5b0-4a47-88a6-7f5064d02cb8",
          name: "Tacha Ferragista FR Nº 12 - 16mm",
          value: 1200,
          status: "IN_PROGRESS",
          createdAt: "2023-01-13T18:05:49",
        },
        {
          debitCode: "03f83aeb-9e89-44b4-bf38-e68d609b1c24",
          name: "Prego Quadrado Caverna 5'",
          value: 2998,
          status: "COMPLETED",
          createdAt: "2023-02-12T18:05:49",
        },
      ],
      loading: false,
      error: false,
    });

    const { getByText, getByPlaceholderText, debug } = render(
      <ChargesListContainer />
    );

    debug();

    expect(getByPlaceholderText("Buscar")).toBeInTheDocument();
    expect(getByText("Filtrar")).toBeInTheDocument();
    expect(getByText("Prego Quadrado Caverna 5'")).toBeInTheDocument();
  });

  it("handles input change", () => {
    const { getByPlaceholderText } = render(<ChargesListContainer />);

    const input = getByPlaceholderText("Buscar");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });

  it("dispatches fetchCharges action on button click", async () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByText } = render(<ChargesListContainer />);

    const button = getByText("Filtrar");
    fireEvent.click(button);

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
