import React from 'react'

export default function SmallMenu({ selected, sup }) {

    if (selected === 'first_name') {
        return (
            <div>
                <select id='firstname' className='form-select' defaultValue={null} placeholder='asd' onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null}>Select First Name</option>
                    <option value='yabez'>Yabez </option>
                    <option value='kevin' >Kevin </option>
                    <option value='charlie' >Charlie </option>
                    <option value='bruce' >Bruce </option>
                </select>


            </div>
        )
    }

    else if (selected === 'last_name') {
        return (
            <div>
                <select id='lastname' className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null}>Select Last Name</option>
                    <option value='silva'>Silva </option>
                    <option value='cruize' >Cruize </option>
                    <option value='wane' >Wane </option>
                    <option value='hart' >Hart </option>
                </select>


            </div>
        )
    }

    else if (selected === 'gender') {
        return (
            <div>
                <select id='gender' className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null} >Select Gender</option>
                    <option value='male'>Male </option>
                    <option value='female' >Female </option>
                </select>


            </div>
        )
    }

    else if (selected === 'age') {
        return (
            <div>
                <select id='age'className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null}>Select Age</option>
                    <option value='21' >21 </option>
                    <option value='22' >22 </option>
                    <option value='23' >23 </option>
                    <option value='24' >24 </option>
                    <option value='25' >25 </option>
                    <option value='26' >26 </option>
                    <option value='27' >27 </option>
                    <option value='28' >28 </option>
                </select>


            </div>
        )
    }

    else if (selected === 'account_name') {
        return (
            <div>
                <select id='accountName' className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null} >Select Account Name</option>
                    <option value='yabez'>Yabez </option>
                    <option value='kevin'>Kevin </option>
                    <option value='charlie'>Charlie </option>
                    <option value='bruce'>Bruce </option>
                </select>
            </div>
        )
    }

    else if (selected === 'city') {
        return (
            <div>
                <select id='city' className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null}>Select City</option>
                    <option value='chennai'>Chennai </option>
                    <option value='mumbai' >Mumbai </option>
                    <option value='bangalore' >Banglore </option>
                    <option value='kolkata' >kolkata </option>
                </select>
            </div>
        )
    }

    else if (selected === 'state') {
        return (
            <div>
                <select id='state' className='form-select' defaultValue={null} onChange={(e) => sup(e)} >
                    <option defaultChecked hidden value={null}>Select State</option>
                    <option value='tamilnadu'>Tamilnadu </option>
                    <option value='maharastra' >Maharastra </option>
                    <option value='karnataka' >Karnataka </option>
                    <option value='west_bengal' >West Bengal </option>
                </select>
            </div>
        )
    }
}
