import React, { useState } from "react";
import ItemEdit from "./ItemEdit";
import BasketContext from "../../context/BasketContext";
import { useContext } from "react";

export default function CartItem({ item }) {

  let {onChangeItem} = useContext(BasketContext);

  const onClickButton = (quantity) => {
    onChangeItem(item.pk, quantity, parseFloat(item.product_price) * quantity);
  };

  let editItem = document.getElementById('edit-item');
  let unhideArea = document.getElementById('unhide-area');
  document.addEventListener('click', (e) => {
    if (editItem && e.target.id != editItem.id && e.target.id != 'unhide-area' && edit){
      setEdit(!edit);
      console.log(e.target.id + '  ' + editItem.id + ' ' + edit)
      console.log(editItem && e.target.id != editItem.id  &&  edit)
    }
  })

  let [edit, setEdit] = useState(false);

  return (
    <>
      <tr className="text-xs md:text-lg">
        <td className="text-center ">
          <div className="item-table-info">
            <div className="item-info">
              <img
                className="lg:h-36 lg:w-36  h-10 w-10"
                width="100px"
                src={item.product_image}
                alt="product_img"
              ></img>
            </div>
            <div className="">{item.product_name}</div>
          </div>
        </td>
        <td className="text-center">{item.product_price}</td>
        <td className="text-center">
          <span className="mx-2" id='unhide-area'>{item.quantity}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil"
            viewBox="0 0 16 16"
            id='edit-item'
            onClick = {() => setEdit(!edit)}
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
          <div id='unhide-area'>
            {edit && <ItemEdit item={item} onClick={onClickButton}/>}
          </div>
        </td>
        <td className="text-center" width="100px">
          {item.total_price}
        </td>
      </tr>
    </>
  );
}
