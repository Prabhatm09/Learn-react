import { Greet } from "./Greet";
import { render , screen } from "@testing-library/react";

// describe("Greet" , ()=> {
// test("render properly" , ()=> {
//     render(<Greet />);
//     const text = screen.getByText("Hello");
//     expect(text).toBeInTheDocument();
// });

// describe("greet2", ()=> {
// test("render properly with name" , ()=> {
//     render(<Greet name="Air campus" />);
//     const text = screen.getByText("Hello Air campus");
//     expect(text).toBeInTheDocument();
// });
// })

// })
// test("render properly with name" , ()=> {
//     render(<Greet name="Air campus" />);
//     const text = screen.getByText("Hello Air campus");
//     expect(text).toBeInTheDocument();
// });

test("Greet render properly" , ()=> {
    render(<Greet />);
    const text = screen.getByText("guest");
    expect(text).toBeInTheDocument();
});

test.only("Greet render properly with name" , ()=> {
    render(<Greet name="Air campus" />);
    const text = screen.getByText("Hello Air campus");
    expect(text).toBeInTheDocument();
});