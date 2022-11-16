import React from "react";
import  ReactDOM  from "react-dom";
import "@testing-library/jest-dom/extend-expect"
import {render, cleanup} from "@testing-library/react"
import { Button } from "@mui/material";
import "@testing-library/jest-dom/extend-expect"

afterEach(() => {
    cleanup()
})

it('renders student login button correctly', () => {
    const {getByTestId} = render(<Button variant="contained" onClick={() => navigate('/login')} size='large' data-testid="test-student-btn">Student Login</Button>)
    expect(getByTestId('test-student-btn')).toHaveTextContent('Student Login')
})

it('renders admin login button correctly', () => {
    const {getByTestId} = render(<Button variant="contained" onClick={() => navigate('/admin/login')} size='large' data-testid="test-admin-btn">Admin Login</Button>)
    expect(getByTestId('test-admin-btn')).toHaveTextContent('Admin Login')
})