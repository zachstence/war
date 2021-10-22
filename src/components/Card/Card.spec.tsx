import {render, screen} from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {

    it("should render ♠ for suit spades", () => {
        render(<Card suit="spades" rank={2} />);
        expect(screen.getByText(/2♠/)).toBeInTheDocument();
    });

    it("should render ♥ for suit hearts", () => {
        render(<Card suit="hearts" rank={3} />);
        expect(screen.getByText(/3♥/)).toBeInTheDocument();
    });

    it("should render ♦ for suit diamonds", () => {
        render(<Card suit="diamonds" rank={4} />);
        expect(screen.getByText(/4♦/)).toBeInTheDocument();
    });

    it("should render ♣ for suit clubs", () => {
        render(<Card suit="clubs" rank={5} />);
        expect(screen.getByText(/5♣/)).toBeInTheDocument();
    });

    it("should render A for rank 1", () => {
        render(<Card suit="spades" rank={1} />);
        expect(screen.getByText(/A♠/)).toBeInTheDocument();
    });

    it("should render J for rank 11", () => {
        render(<Card suit="hearts" rank={11} />);
        expect(screen.getByText(/J♥/)).toBeInTheDocument();
    });

    it("should render Q for rank 12", () => {
        render(<Card suit="diamonds" rank={12} />);
        expect(screen.getByText(/Q♦/)).toBeInTheDocument();
    });

    it("should render K for rank 13", () => {
        render(<Card suit="clubs" rank={13} />);
        expect(screen.getByText(/K♣/)).toBeInTheDocument();
    });

});