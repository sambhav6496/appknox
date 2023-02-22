export default function InfoData(props) {
  return (
    <>
      <tr>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.gender}</td>
        <td>{props.user.jobTitle}</td>
        <td>{props.user.jobType}</td>
        <td>{props.user.salary}</td>
      </tr>
    </>
  );
}
