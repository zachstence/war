import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Game from "./Game";

describe("<Game />", () => {
    const CARD_REGEX = /(A|1|2|3|4|5|6|7|8|9|10|J|Q|K)[♠♥♦♣]/;
    beforeEach(() => {
        render(<Game />);
    });

    it("should render both players and their card counts", () => {
        expect(screen.getByText("PLAYER 1")).toBeInTheDocument();
        expect(screen.getByText("PLAYER 2")).toBeInTheDocument();
        expect(screen.getAllByText("26 cards remaining").length).toEqual(2);
    });

    it("should play one card from each player when play button is clicked", () => {
        const playButton = screen.getByRole("button", {name: /Play/});

        userEvent.click(playButton);

        expect(screen.getAllByText("25 cards remaining").length).toEqual(2);
        expect(screen.getAllByText(CARD_REGEX).length).toEqual(2);
    });

    it("should show evaluate button after playing", () => {
        const playButton = screen.getByText("Play");

        userEvent.click(playButton);

        expect(screen.getByRole("button", {name: /Evaluate/})).toBeInTheDocument();
    });

    it("should show play button after evaluating", () => {
        const playButton = screen.getByRole("button", {name: /Play/});

        userEvent.click(playButton);

        const evaluateButton = screen.getByRole("button", {name: /Evaluate/});

        userEvent.click(evaluateButton);

        expect(screen.getByRole("button", {name: /Play/})).toBeInTheDocument();
    });
});