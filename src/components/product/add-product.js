import React, {useState} from "react";

export default function AddProduct(props){    
    const booksList = ['Math', 'English', 'Physics', 'Science'];
    const grade = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'];
    const [count, updateCounter] = useState(0);
    const [bName, setBName] = useState('');
    const [bDes, setBDes] = useState('');
    const [bQty, setBQty] = useState(0);
    const [lType, setLType] = useState('free');
    const [bType, setBType] = useState('');
    const [bGrade, setBGrade] = useState([]);
    const [bImage, setBImage] = useState('');
    const [errorData, setErrorData] = useState({});

    const toggleGrade = (item) => {
        let currGrade = [...bGrade];
        let selIndx = currGrade.indexOf(item);

        if(selIndx > -1){
            currGrade.splice(selIndx, 1);
            setBGrade(currGrade);
        }else {
            currGrade.push(item);
            setBGrade(currGrade);
        }
    }

    const validateForm = () => {
        let error = false;
        let errorDataCln = {...errorData}
        if(!!!bName){
            error = true;
            errorDataCln.bName = 'Please enter book name';
        }
        setErrorData(errorDataCln);
        return !error;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = validateForm();

        if(isValid){
            const data = {
                'productName'   : bName,
                'productDes'    : bDes,
                'productQty'    : bQty,
                'listingType'   : lType,
                'productType'   : bType,
                'ProductGrade'  : bGrade,
                'ProductImage'  : bImage
            }
            props.handleSubmit(data);
            setBName('');
            setBDes('');
            setBQty(0);
            updateCounter(0);
            setLType('free');
            setBType('');
            setBGrade([]);
            setBImage('');
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Listing Type</label>
                    <section>
                        <div className="form-check form-check-inline">
                            <input onChange={() => setLType('free')} className="form-check-input" type="radio" name="ltype" id="free" value="free" checked={lType === 'free'} />
                            <label className="form-check-label" htmlFor="free">
                                Free
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input onChange={() => setLType('paid')} className="form-check-input" type="radio" name="ltype" id="paid" value="paid" />
                            <label className="form-check-label" htmlFor="paid">
                                Paid
                            </label>
                        </div>
                    </section>
                </div>
                <div className="mb-3">
                    <label>Book Type</label>d
                    <select value={bType} className="form-control" onChange={(e) => setBType(e.target.value)}>
                        <option>Select Book Type</option>
                        {
                            booksList.map((item, k) => {
                                return (
                                    <option key={k} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label><strong>Grade</strong></label>
                    <section>
                        {
                            grade.map((item, k) => {
                                return(
                                    <div key={k} className="form-check form-check-inline">
                                        <input className="form-check-input" id={`grade_${k}`} type="checkbox" checked={bGrade.includes(item)} onChange={(e) => toggleGrade(e.target.value)} value={item} />
                                        <label className="form-check-label" htmlFor={`grade_${k}`}>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </section>
                </div>
                <div className="mb-3">
                    <label>Book Name</label>
                    <input type="text" onChange={(e) => setBName(e.target.value)} value={bName} className="form-control" />
                    {
                        (!!errorData.bName) ?
                        <p className="alert alert-danger my-1">Please enter book name</p>
                        : null
                    }

                </div>
                <div className="mb-3">
                    <label>Book Qty</label>
                    <div className="row">
                        <div className="col-2">
                            <button type="button" className="m-1 btn btn-secondary" onClick={() => updateCounter((count >= 1) ? count - 1 : 0)}>-</button>
                        </div>
                        <div className="col-3">
                            <input className="form-control mt-1 text-center" onChange={(e) => updateCounter(e.target.value)} value={count} />
                        </div>
                        <div className="col-2 pl-0">
                            <button type="button" className="m-1 btn btn-secondary" onClick={() => updateCounter((count <= 9) ? count + 1 : count)}>+</button>
                        </div>
                        <div className="col-2">
                            <button type="button" className="m-1 btn btn-warning" onClick={() => setBQty(count)}>Update</button>
                        </div>
                        {/* <div className="col-2">
                            <button type="button" className="m-1 btn btn-primary" onClick={() => updateCounter(0)}>X</button>
                        </div> */}
                    </div>
                </div>
                <div className="mb-3">
                    <label>Book Description</label>
                    <textarea className="form-control" rows="3" onChange={(e) => setBDes(e.target.value)} value={bDes}>{bDes}</textarea>
                </div>
                <div className="mb-3">
                    <label>Book Image</label>
                    <input type="text" onChange={(e) => setBImage(e.target.value)} value={bImage} className="form-control" />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    )
}