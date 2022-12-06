import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Counter Components", () => {
    test("Renders correctly", () => {
        render(<Form />);

        // const heading = screen.getByRole("heading", {
        //     level: 1,
        //     // name :"Air campus" --> if heading tag so write text inside the heading;
        // });
        // expect(heading).toBeInTheDocument();

        const headingthree = screen.getByRole("heading", {
            level: 3
        });
        expect(headingthree).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {
            name: "name",
        });
        expect(nameElement).toBeInTheDocument();

        const ageElement = screen.getByRole("textbox", {
            name: "age",
        });
        expect(ageElement).toBeInTheDocument();

        const locationElement = screen.getByRole("combobox");
        expect(locationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const submitbtnElement = screen.getByRole("button");
        expect(submitbtnElement).toBeInTheDocument();


        //selectbylabel

        const nameElement2 = screen.getByLabelText("name", {
            selector: "input"
        });
        expect(nameElement2).toBeInTheDocument();

        const locationElement2 = screen.getByLabelText("location");
        expect(locationElement2).toBeInTheDocument();

        //getbyPlaceholder

        const nameElement3 = screen.getByPlaceholderText("firstname");
        expect(nameElement3).toBeInTheDocument();

        //getByText -> p , span , div


        // const paragraphElement = screen.getByText("good night, thank you");
        // expect(paragraphElement).toBeInTheDocument();

        //getByDisplayValue

        const nameElement4 = screen.getByDisplayValue("prabhat");
        expect(nameElement4).toBeInTheDocument();


        //getByAlt

        const imageElement = screen.getByAltText("picture");
        expect(imageElement).toBeInTheDocument();

        //getByTitle

        const heading2 = screen.getByTitle("prabhat");
        expect(heading2).toBeInTheDocument();

        //custom
        const custom = screen.getByTestId("custom");
        expect(custom).toBeInTheDocument();



    })
})