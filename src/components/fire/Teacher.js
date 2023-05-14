// import {  onValue, ref } from 'firebase/database';
// import { database } from './FirebaseCode';
// import React, { Component } from 'react'

// export default class Teacher extends Component {
//     constructor() {
//       super()

//       this.state = {
//          datavalues: [],

//       }
//     }

//     componentDidMount(){
//         const starCountRef = ref(database, 'Questions' );
//         onValue(starCountRef, (snapshot) => {
//             let records =[];
//             snapshot.forEach(childSnapshot => {
//                 let keyName = childSnapshot.key;
//                 const data = childSnapshot.val();
//                 records.push({"key": keyName, "data": data});
//             });
//             this.setState({ datavalues: records });
//         });

//     }

//     checkhandler(e){
//         const check = e.target.value;
//         this.setState(console.log(check));
//     }

//   render() {
//     return (<>

//         <table className='container table table-striped table-bordered table-dark w-75 mt-3' >
//                 <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>QID</th>
//                     <th>Question</th>
//                     {/* <th>Answer</th> */}
//                     <th>Topic</th>
//                     <th>ChapterNo</th>
//                     <th>Subject</th>
//                     <th>Marks</th>
//                 </tr>
//                 </thead>

//                 <tbody>
//                 {this.state.datavalues.map((row, index) =>{
//                     return(
//                         <tr key={index}>
//                             <td>
//                                 <input className="form-check-input" type="checkbox" onChange={this.checkhandler} value={this.state.datavalues} />
//                             </td>
//                             <td>{row.data.QID}</td>
//                             <td>{row.data.Question}</td>
//                             {/* <td>{row.data.Answer}</td> */}
//                             <td>{row.data.Topic}</td>
//                             <td>{row.data.ChapterNo}</td>
//                             <td>{row.data.Subject}</td>
//                             <td>{row.data.Marks}</td>
//                         </tr>
//                     )
//                 })}
//                 </tbody>
//         </table>
//         <div className='d-flex justify-content-evenly mb-5 mt-0'>
//             <button type="submit" className="btn btn-primary">Add</button>
//         </div>
//     </>)
//   }
// }






// /////////////////////////////////////////////////////////////////////////////////////////////////////////











// import { onValue, ref } from 'firebase/database';
// import { database } from './FirebaseCode';
// import React, { useEffect, useState } from 'react'
// // import BootstrapTable from 'react-bootstrap-table-next'
// // import {Table} from 'react-bootstrap'
// import DataTable from 'react-data-table-component'


// export default function Teacher() {

//     const [datavalues, setdatavalues] = useState([])
//     const [search, setsearch] = useState('')
//     const [filtersData, setfiltersData] = useState([])

//     useEffect(() => {
//         const starCountRef = ref(database, 'Questions');
//         onValue(starCountRef, (snapshot) => {
//             const data=snapshot.val();  
//             // setdatavalues(...datavalues,data)
//             setdatavalues(...datavalues,data)
//         })
//     }, [])

//     // useEffect(()=>{
//     //     const result = datavalues.filter(formdata =>{
//     //         return formdata.Question.toLowerCase().match(search.toLowerCase());
//     //     })
//     //     setsearch(result)
//     // },[])

//     const columns = [
//         {
//             name: 'S.No.',
//             selector: row => row.QID,
//         },
//         {
//             name: 'Questions',
//             selector: row => row.Question,
//         },
//         {
//             name: 'Topic',
//             selector: row => row.Topic,
//         },
//         {
//             name: 'Chapter No',
//             selector: row => row.ChapterNo,
//             sortable: true,
//         },
//         {
//             name: 'Marks',
//             selector: row => row.Marks,
//             sortable: true,
//         },
//         {
//             name: 'Answers',
//             cell: row => (<button className='btn btn-primary' onClick={() => alert(row.Answer)}>View Ans</button>)
//         },
//     ]



//     return (<>
//         <DataTable
//             columns={columns}
//             data={datavalues}
//             pagination
//             title='Question Paper Generator'
//             fixedHeader
//             fixedHeaderScrollHeight='400px'
//             selectableRows
//             selectableRowsHighlight
//             highlightOnHover
//             actions={<>
//                 <button className='btn btn-info'>Download Question</button>
//                 <button className='btn btn-info'>Download Answer</button>
//             </>
//             }
//             subHeader
//             subHeaderComponent={<>
//                 <input
//                     type="text"
//                     placeholder='Search here...'
//                     className='w-25 form-control'
//                     value={search}
//                     onChange={(e) => setsearch(e.target.value)}
//                 />
//             </>}
//             subHeaderAlign="center"
//         />
//     </>)

// }





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









import { onValue, ref } from 'firebase/database';
import { database } from './FirebaseCode';
import React, { useEffect, useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// import * as ReactBootstrap from 'react-bootstrap'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
// import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import ToolkitProvider, {CSVExport, Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
// import {Table} from 'react-bootstrap'
// import DataTable from 'react-data-table-component'


export default function Teacher() {

    const [datavalues, setdatavalues] = useState([])
    const [loading, setLoading] = useState(false)
    // const [search, setsearch] = useState('')
    // const [filtersData, setfiltersData] = useState([])

    useEffect(() => {
        const starCountRef = ref(database, 'Questions');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            setdatavalues(...datavalues, data)
            setLoading(true)
            console.log(...datavalues,data);
        })
    }, [])

    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;
   const MyExportCSV = (props) => {
        const questionclickHandlar = () => {
            props.onExport();
            
        }
        const answerclickHandlar = () => {
            // props.onExport();
             props.onExport(datavalues.filter(r => r.Answer));
            
        }
        return (
            <div className='align-self-end' >
                <button className='btn btn-primary m-1 ms-5' onClick={questionclickHandlar}>Download Questions</button>
                <button className='btn btn-success m-1 me-5' onClick={answerclickHandlar}>Download Answers</button>
            </div>
        )
    }
    
    const columns = [
        { dataField: 'QID', text: 'Q.No.', editable: false },
        { dataField: 'Question', text: 'Questions', },
        { dataField: 'Topic', text: 'Topic', editable: false, csvExport: false, filter: textFilter()},
        { dataField: 'ChapterNo', text: 'Chapter No', sort: true, editable: false, csvExport: false },
        {
            dataField: 'Marks', text: 'Marks', sort: true, // editable: false,
            validator: (newValue, row, column) => {
                if (isNaN(newValue)) {
                    return {
                        valid: false,
                        message: "Please enter a number value"
                    }
                }
                return true
            }
        },
    ]

    const CaptionElement = () => <h3 style={{ 
        borderRadius: '0.25em', 
        margin: '0.25em', 
        textAlign: 'center', 
        color: 'purple', 
        border: '1px solid purple', 
        padding: '0.5em' }}>Question Paper Generator</h3>;
    const selectRow = {
        mode: 'checkbox',
        // clickToSelect: true,
        clickToExpand: true,
        clickToEdit: true,
        // style: { backgroundColor: '#c8e6c9' }
        bgColor: 'lightgreen',
        // nonSelectable: [0, 2, 4],
        // nonSelectableStyle: { backgroundColor: 'gray' },
        selectColumnStyle: {
            backgroundColor: 'grey'
        }
    }
    const expandRow = {
        className: 'bg-info',
        parentClassName: 'bg-warning',
        renderer: row => (
            <div>
                <h5>{`Answer is`}</h5>
                <p>{`${row.Answer}`}</p>
            </div>
        ),
        showExpandColumn: true,
        expandByColumnOnly: true,
        onlyOneExpanding: true,
        // editable: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            if (isAnyExpands) {
                return <b>[]</b>;
            }
            return <b>Answers</b>;
        },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (
                    <b>Question</b>
                );
            }
            return (
                <b>Answer</b>
            );
        }
    };
    return (<>
        <ToolkitProvider
            keyField="QID"
            data={datavalues}
            columns={columns}
            // bootstrap4
            search 
            exportCSV={{
                fileName: 'pyforschool.csv',
                // separator: '|',
                // ignoreHeader: true,
                noAutoBOM: false,
                onlyExportSelection: true,
                exportAll: true,
            }}
        >
            {
                props => (
                    <div>
                        <div className='d-flex justify-content-end '>
                       <SearchBar { ...props.searchProps} 
                       className=" d-flex justify-content-start me-5"
                    //    style={ { color: 'black',  } }
                    //    delay={ 1000 }
                       placeholder="Search Something!!!"
                       />
                        <MyExportCSV {...props.csvProps}
                        // className='d-flex justify-content-end align-self-end'
                         />
                        </div>
                        <hr />
                        <CaptionElement />
                        {loading ? (<BootstrapTable
                            // bootstrap4
                            // keyField='QID'
                            // data={datavalues}
                            // columns={columns}
                            // striped
                            hover
                            condensed
                            pagination={paginationFactory()}
                            cellEdit={cellEditFactory({ mode: 'dbclick' })}
                            filter={ filterFactory() }
                            selectRow={selectRow}
                            expandRow={expandRow}
                            {...props.baseProps}
                        />) : (<h3 className='text-center text-warning'> Loading Data...</h3>)}


                     </div>
                )
            } 
        </ToolkitProvider>
    </>)

}
