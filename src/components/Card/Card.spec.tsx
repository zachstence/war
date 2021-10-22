import {render, screen} from "@testing-library/react";
import CardComp from "./Card";

describe("<CardComp />", () => {

    it("should render ♠ for suit spades", () => {
        render(<CardComp card={{suit: "spades", rank: 2}} />);
        expect(screen.getByText(/2♠/)).toBeInTheDocument();
    });

    it("should render ♥ for suit hearts", () => {
        render(<CardComp card={{suit: "hearts", rank: 3}} />);
        expect(screen.getByText(/3♥/)).toBeInTheDocument();
    });

    it("should render ♦ for suit diamonds", () => {
        render(<CardComp card={{suit: "diamonds", rank: 4}} />);
        expect(screen.getByText(/4♦/)).toBeInTheDocument();
    });

    it("should render ♣ for suit clubs", () => {
        render(<CardComp card={{suit: "clubs", rank: 5}} />);
        expect(screen.getByText(/5♣/)).toBeInTheDocument();
    });

    it("should render A for rank 1", () => {
        render(<CardComp card={{suit: "spades", rank: 1}} />);
        expect(screen.getByText(/A♠/)).toBeInTheDocument();
    });

    it("should render J for rank 11", () => {
        render(<CardComp card={{suit: "hearts", rank: 11}} />);
        expect(screen.getByText(/J♥/)).toBeInTheDocument();
    });

    it("should render Q for rank 12", () => {
        render(<CardComp card={{suit: "diamonds", rank: 12}} />);
        expect(screen.getByText(/Q♦/)).toBeInTheDocument();
    });

    it("should render K for rank 13", () => {
        render(<CardComp card={{suit: "clubs", rank: 13}} />);
        expect(screen.getByText(/K♣/)).toBeInTheDocument();
    });

});