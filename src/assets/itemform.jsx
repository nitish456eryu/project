import React from "react";

const Itemform = () => {
    const date = new Date();
    return (
        <>
            <h2>Item Details</h2>
            <form action="">
                <label htmlFor="">Item Name</label>
                <input type="text" placeholder="Enter item name" maxLength={225} />
                <label htmlFor="">Quantity</label>
                <input type="number" placeholder="Enter quantity" maxLength={10}/>
                <label htmlFor="">Unit Price</label>
                <input type="number" placeholder="Enter unit price" step="0.01" />
                <label htmlFor="">Date of Submission</label>
                <input type="date" min="2025-01-03" placeholder="Select date" />
            </form>
            <h2>Supplier Details</h2>
            <form action=""></form>
        </>
    );
};
export default Itemform;