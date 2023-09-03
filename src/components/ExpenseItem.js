import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      {/* METHOD 01*/}
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>

      {/* METHOD  02 */}

      {/* <div>{props.expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expense-item__price">${props.expense.amount}</div> */}
    </div>
  );
}

// METHOD 03

// function ExpenseItem({ date, title, amount }) {
//   return (
//     <div className="expense-item">
//       {/* method 1 */}
//       <div>{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//       </div>
//       <div className="expense-item__price">${amount}</div>
//     </div>
//   );
// }

export default ExpenseItem;
