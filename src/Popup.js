
import React, { useState } from 'react'
import './Popup.css'
import SmallMenu from './SmallMenu'
import Select from 'react-select'
import axios from 'axios'
export default function Popup({ toggle }) {

    const [array, setarray] = useState([])
    const [result, setresult] = useState('')
    const [selectedres, setselectedres] = useState('')
    const [schema, setschema] = useState('')
    const [data, setData] = useState([])

    const [lists, setlists] = useState(
        
        [{
            value: 'first_name',
            label: 'First Name',

        },
        {
            value: 'last_name',
            label: 'Last Name'
        },
        {
            value: 'gender',
            label: 'Gender'
        },
        {
            value: 'age',
            label: 'Age'
        },
        {
            value: 'account_name',
            label: 'Account'
        },
        {
            value: 'city',
            label: 'City'
        },
        {
            value: 'state',
            label: 'State'
        }
    ])


    const handler = () => {

        if (setselectedres === result) {

        }
        else if (selectedres !== result) {
            setselectedres(result)

            setarray(previous => [...previous, result])
            setlists((list) => list.filter((move) => move.value !== result));
          
        }
    }

    const sup = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    const remove = (e) => {

        setresult(e.value)
    }

    const submit = (e) => {
        e.preventDefault()
        axios.post('https://webhook.site/dd146f35-5519-4ce8-8894-fac340d4e415', { segment_name: schema, schema: data })
            .then(res => res.data)
    }

  
    return (
        <div className="pop_background">
            <div className="pop_content">

                <div className='pop_title'>
                    Save Segment
                </div>
            
                <div className='form'>
                    <div className='segment_form'>
                        <div className='segment_name'>
                            Enter Name of the Segment
                        </div>
                        <div>
                            <input className='form-control' type='text' placeholder='Name of Segment' onChange={(e) => { setschema(e.target.value) }} />
                        </div>
                    </div>

                    <div className='segment_sess_ds'>
                        To save your segment,  you need to add schemas to build your query
                    </div>

                    <div className='selected_schema_array'>
                        {array.map((selected) => (

                            <SmallMenu
                                id={selected.id}
                                selected={selected}
                                sup={sup}

                            />
                        ))}
                    </div>
                </div>
                <div>
                    <Select id='select_value' defalutChecked placeholder='Select value' defaultValue={null} options={lists} onChange={remove} />

                    <div>

                        <span className="addSchema" onClick={handler}>+ Add schema   </span>
                    </div>
                    <div className='form_buttons'>

                        <button className='btn btn-primary but' onClick={submit}>submit</button>
                        <button className='btn btn-light but' onClick={toggle} >Close</button>
                    </div>

                </div>

            </div>
        </div>
    )
}