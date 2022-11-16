import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";

import "@testing-library/jest-dom/extend-expect"
import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

afterEach(() => {
    cleanup()
})

it('Should render submit form button without crashing', () => {
    const {getByTestId} = render(<Button
        sx={{
          display: "flex",
        }}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        data-testid="test-addjob-submit-btn"
      >
        SUBMIT
      </Button>)
      expect(getByTestId('test-addjob-submit-btn')).toBeInTheDocument()
})

it('Should render submit form button correctly', () => {
    const {getByTestId} = render(<Button
        sx={{
          display: "flex",
        }}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
        data-testid="test-addjob-submit-btn"
      >
        SUBMIT
      </Button>)
      expect(getByTestId('test-addjob-submit-btn')).toHaveTextContent('SUBMIT')
})