
import React from "react";
import Image from "../Image";
import { render, screen } from "@testing-library/react";
import { toHaveAttribute } from "@testing-library/jest-dom";


// Test verify the correct rendering of an image component

describe("image Component", () => {
    it("Should render image component", () =>{
        render(<Image 
            url="https://farm66.staticflickr.com/65535/24166708390_80b16584bd_m.jpg"
            title="Testowy title"
            />);

        const imgElement = screen.getByRole("img");
        expect(imgElement).toHaveAttribute("src", "https://farm66.staticflickr.com/65535/24166708390_80b16584bd_m.jpg")
       
    })
})