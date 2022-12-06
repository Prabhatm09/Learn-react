import { Skill } from "./Skill";

import { render, screen } from "@testing-library/react";

describe("Skill components", () => {
    const skills = ["html", "css", "js", "react"]

    test("renders correclty", () => {
        render(<Skill />);
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });


    // test("renders all skills", () => {
    //     render(<Skill skills={skills} />);
    //     const listElements = screen.getAllByRole("listitem");
    //     expect(listElements).toHaveLength(skills.length);
    // });

    test("render login button", () => {
        render(<Skill />);
        const loginButton = screen.getByRole("button", {
            name: "Log in"
        });
        expect(loginButton).toBeInTheDocument();
    })

    test("not render start learning button", () => {
        render(<Skill />);
        const startlearningbtn = screen.queryByRole("button", {
            name: "start learning"
        });
        expect(startlearningbtn).not.toBeInTheDocument();
    })


    //whemever u deal withs with aysnc call we use findByRole

    test("start learning should display after some delay", async () => {
        render(<Skill skills={skills} />);
        const startlearningbtn = await screen.findByRole("button", {
            name: "start learning"
            //defaullt time wait is 1 sec
        }, {
            timeout: 2000,
        });
        expect(startlearningbtn).toBeInTheDocument();
    })



});