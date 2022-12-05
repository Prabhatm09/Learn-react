import { Greet } from "./Greet";
import { render, screen } from "@testing-library/react";

// test("greet render properly", () => {
//     render(<Greet />);
//     const text = screen.getByText("hello");
//     expect(text).toBeInTheDocument();
// })

// test("greet name properly", () => {
//     render(<Greet name={"air campus"} />);
//     const text = screen.getByText("hello air campus");
//     expect(text).toBeInTheDocument();
// })


// test.only("greet name properly", () => { //.only -->  to run the specific test case
//     render(<Greet name={"air campus"} />);
//     const text = screen.getByText("hello air campus");
//     expect(text).toBeInTheDocument();
// })

// test.skip("greet name properly", () => { //.skip -->  to stop from run the specific test case
//     render(<Greet name={"air campus"} />);
//     const text = screen.getByText("hello air campus");
//     expect(text).toBeInTheDocument();
// })

// describe("Greet", () => { //describe to use for group testing
//     test("Render properly", () => {
//         render(<Greet />);
//         const text = screen.getByText("hello");
//         expect(text).toBeInTheDocument();
//     })

//     test("Name properly", () => {
//         render(<Greet name={"air campus"} />);
//         const text = screen.getByText("hello air campus");
//         expect(text).toBeInTheDocument();
//     })
// })



describe("Greet", () => { //describe to use for group testing
    test("Render properly", () => {
        render(<Greet />);
        const text = screen.getByText("hello");
        expect(text).toBeInTheDocument();
    })

    describe("greet name", () => {
        test("Name properly", () => {
            render(<Greet name={"air campus"} />);
            const text = screen.getByText("hello air campus");
            expect(text).toBeInTheDocument();
        })
    })

})