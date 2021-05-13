import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

const withList = (Component, getList) => {
  return function WithList(props) {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(async () => {
      const { data } = await getList();
      setList(data);
      setLoading(false);
    }, []);

    if (!loading) {
      return <Component data={list} {...props} />;
    } else {
      return <Loading />;
    }
  };
};

export { withList };
