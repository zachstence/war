import {render, screen} from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {

    it("should render ♠ for suit spades", () => {
        render(<Card suit="spades" rank={2} faceUp={true}/>);
        expect(screen.getByText(/2♠/)).toBeInTheDocument();
    });

    it("should render ♥ for suit hearts", () => {
        render(<Card suit="hearts" rank={3} faceUp={true}/>);
        expect(screen.getByText(/3♥/)).toBeInTheDocument();
    });

    it("should render ♦ for suit diamonds", () => {
        render(<Card suit="diamonds" rank={4} faceUp={true}/>);
        expect(screen.getByText(/4♦/)).toBeInTheDocument();
    });

    it("should render ♣ for suit clubs", () => {
        render(<Card suit="clubs" rank={5} faceUp={true}/>);
        expect(screen.getByText(/5♣/)).toBeInTheDocument();
    });

    it("should render A for rank 1", () => {
        render(<Card suit="spades" rank={1} faceUp={true}/>);
        expect(screen.getByText(/A♠/)).toBeInTheDocument();
    });

    it("should render J for rank 11", () => {
        render(<Card suit="hearts" rank={11} faceUp={true}/>);
        expect(screen.getByText(/J♥/)).toBeInTheDocument();
    });

    it("should render Q for rank 12", () => {
        render(<Card suit="diamonds" rank={12} faceUp={true}/>);
        expect(screen.getByText(/Q♦/)).toBeInTheDocument();
    });

    it("should render K for rank 13", () => {
        render(<Card suit="clubs" rank={13} faceUp={true}/>);
        expect(screen.getByText(/K♣/)).toBeInTheDocument();
    });

    it("should not render rank or suit when not faceUp", () => {
        render(<Card suit="clubs" rank={13} faceUp={false}/>);
        expect(screen.queryByText(/K♣/)).not.toBeInTheDocument();
    });

});