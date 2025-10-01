import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default async function Loading() {
  return (
    <div>
      <ul>
        <li>
          Name: <Skeleton />
        </li>
        <li>
          Username: <Skeleton />
        </li>
        <li>
          Phone: <Skeleton />
        </li>
        <li>
          Email: <Skeleton />
        </li>
      </ul>
    </div>
  );
}
