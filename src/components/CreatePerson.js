import { useState } from "react";
import axios from "axios";

export default function CreatePerson (){

        const [inputs, setInputs] = useState({})
        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({...values, [name]: value}));
        }
        const handleSubmit = (event) => {
            event.preventDefault();

            axios.post('http://localhost:80/api/person/save/', inputs);

            console.log(inputs);
        }
    return (
        <div>
       <h3>Erfassen der Personen</h3>
       <form onSubmit={handleSubmit}>
            <table align="center" cellSpacing={5}>
                <tbody>
                    <tr>
                        <th align="left">
                        <label>Name:</label>
                        </th>
                        <td>
                        <input type="text" name="name" onChange={handleChange}/>   
                        </td>
                    </tr>
                    <tr>
                        <th>
                        <label>Familie:</label>
                        </th>
                        <td>
                        <input type="text" name="family" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Titel:</label>
                        </th>
                        <td>
                        <input type="text" name="title" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Nation:</label>
                        </th>
                        <td>
                        <input type="text" name="nation" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Klasse:</label>
                        </th>
                        <td>
                        <input type="text" name="class" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Geboren:</label>
                        </th>
                        <td>
                        <input type="text" name="birth" onChange={handleChange} /> 
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Gestorben:</label>
                        </th>
                        <td>
                        <input type="text" name="death" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label>Kommentare:</label>
                        </th>
                        <td>
                        <input type="text" name="comments" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                        <br />  
                        </td>
                    </tr>
                   

                    <tr>
                        <td colSpan="2" align="right">
                        <button>Save</button>  
                        </td>
                    </tr>
                    
                </tbody>
            </table>
       </form>
       
       
       </div>
    );
}