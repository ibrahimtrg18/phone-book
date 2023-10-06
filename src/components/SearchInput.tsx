import React, { useEffect, useState } from "react";

import { Box, Input } from ".";
import { InputProps } from "./Input/Input.types";

type SearchInputProps = InputProps & {
  onSearch: (v: any) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const [value, setValue] = useState(props.value || "");
  let timeoutId: any = null;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timeoutId = setTimeout(() => {
      props.onSearch(value);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <Box style={{ padding: "10px 10px 0" }}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Searching..."
        {...props}
      />
    </Box>
  );
};

export default SearchInput;
