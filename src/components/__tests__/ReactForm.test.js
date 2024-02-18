import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";


// Test verify value in input

describe("Form component", () => {
    it("Should render value in input", () => {
        render(<Form />);
        const inputElement = screen.getByPlaceholderText("Search...");
        fireEvent.change(inputElement, {target: {value: "Rower"}});
        expect(inputElement.value).toBe("Rower");
        console.log(inputElement)

    })
})
