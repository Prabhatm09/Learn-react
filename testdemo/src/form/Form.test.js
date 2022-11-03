import { render , screen } from "@testing-library/react";

import { Form } from "./Form";

describe("counter component" , ()=> {
    // test("renders input correctly" , ()=> {
    //     render(<Form/>);
    //     const nameElement = screen.getByRole("textbox");
    //     expect(nameElement).toBeInTheDocument();
    // })

    test("renders  location correctly" , ()=> {
        render(<Form/>);
        const locationElement = screen.getByRole("combobox");
        expect(locationElement).toBeInTheDocument();
    })

    test("renders  terms correctly" , ()=> {
        render(<Form/>);
        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();
    })

    test("renders  submitbtn correctly" , ()=> {
        render(<Form/>);
        const submitBtnElement = screen.getByRole("button");
        expect(submitBtnElement).toBeInTheDocument();
    })



})