import React from "react";
import  ReactDOM  from "react-dom";
import "@testing-library/jest-dom/extend-expect"
import {render, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { List, ListItem } from "@mui/material";

afterEach(() => {
    cleanup()
})

it('should render app title correctly', () => {
    const item = {
        py: "2px",
        px: 3,
        color: "rgba(255, 255, 255, 0.7)",
        "&:hover, &:focus": {
          bgcolor: "rgba(255, 255, 255, 0.08)",
        },
      };
    
      const itemCategory = {
        boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
        py: 1.5,
        px: 3,
      };
    const {getByTestId} = render(<List><ListItem
        sx={{
          ...item,
          ...itemCategory,
          fontSize: 22,
          color: "#ffff",
          fontFamily: "inherit",
        }}
        data-testid="test-app-title-sidebar"
      >
        TPO PORTAL
      </ListItem></List>)
    expect(getByTestId('test-app-title-sidebar')).toHaveTextContent('TPO PORTAL')
})