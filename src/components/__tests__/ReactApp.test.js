import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";


// Test verify heading text 

describe("App component", () => {
    it("Should click on tab and verify heading text", () => {
        
        render(<App />);
        const foodTab = screen.getByText("Food");
        fireEvent.click(foodTab);
        const headingElement = screen.getByTestId("headingSearch");
        expect(headingElement).toHaveTextContent("food Pictures");
    
    })
})