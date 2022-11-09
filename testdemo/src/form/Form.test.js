import { render , screen } from "@testing-library/react";

import { Form } from "./Form";

describe("counter component" , ()=> {
    test("renders input correctly" , ()=> {
        render(<Form/>);
        const nameElement = screen.getByRole("textbox" , {
            name : "name",
        });
        expect(nameElement).toBeInTheDocument();
    })
    test("renders input age correctly" , ()=> {
        render(<Form/>);
        const ageElement = screen.getByRole("textbox" , {
            name : "age",
        });
        expect(ageElement).toBeInTheDocument();
    })

    test("renders heading" , ()=> {
        render(<Form/>);
        const  compoHeading = screen.getByRole("heading" , {
            level : 1,
            name: "Air campus",
        });
        expect(compoHeading).toBeInTheDocument();
    })

    test("renders heading h3" , ()=> {
        render(<Form/>);
        const  compoHeadingthree = screen.getByRole("heading" , {
            level : 3,
        });
        expect(compoHeadingthree).toBeInTheDocument();
    })

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
  

    test("renders  name correctly" , ()=> {
        render(<Form/>);
        const nameElement =  screen.getByLabelText("Name");
     expect(nameElement).toBeInTheDocument();
    })
     
    //getby placeholder 

     test("renders  name  element threee correctly" , ()=> {
        render(<Form/>);
        const nameElement3 =  screen.getAllByPlaceholderText("firstName");
     expect(nameElement3).toBeInTheDocument();
    })
 

    //getbytext -- p , span , div
     
     test("renders  para  element correctly" , ()=> {
        render(<Form/>);
        const paraElement =  screen.getByText("good night");
     expect(paraElement).toBeInTheDocument();
    })
 

     test("renders  name  element four correctly" , ()=> {
        render(<Form/>);
        const nameElement4 =  screen.getByDisplayValue("vasanth");
     expect(nameElement4).toBeInTheDocument();
    })

     test("renders  image correctly" , ()=> {
        render(<Form/>);
        const imageElement =  screen.getByAltText("pictures");
     expect(imageElement).toBeInTheDocument();
    })
})