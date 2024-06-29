import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ListItem({list,to}) {
  return (
    <Link to={to}>
        <li className="inline-block text-grayish-list text-base">{list}</li>
    </Link>
    )
}
