import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const search = () => {
    dispatch({ type: "SEARCH_NAME", payload: { keyword } });
  };
  return (
    <div className="search-box">
      <Row>
        <Col lg={9}>
          <Form.Control
            type="text"
            placeholder="이름을 검색하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit" onClick={search}>
            검색
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
