import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//to create bootstrap table
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';//to style the bootstrap table
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';//to provide styling for pagination
import paginationFactory from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';//for search functionality
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import axios from 'axios';

const BootstrappedTable = () => {
      const products = [
        { id: 1, project_name: 'Allosaurus web app', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 2, project_name: 'Microraptor website', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 3, project_name: 'Tarius landing page', status: 'On hold', last_update: '15 Mar 2021, 12:47 PM', resources: '1', project_timeline: '------>------', estimate:'US$ 10.5k' },
        { id: 4, project_name: 'Rugops App', status: 'At risk', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 5, project_name: 'Erketu', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'-' },
        { id: 6, project_name: 'Capricorn', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 7, project_name: 'Sagittarius', status: 'Potential risk', last_update: '15 Mar 2021, 12:47 PM', resources: '1', project_timeline: '15 May 2021>15 Aug 2021', estimate:'-' },
        { id: 8, project_name: 'Gemini', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 9, project_name: 'Pisces', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 10, project_name: 'Taurus', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 11, project_name: 'Osiris', status: 'Potential risk', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 12, project_name: 'Horus', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 13, project_name: 'Hathor', status: 'At risk', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 14, project_name: 'Zara web app', status: 'On hold', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' },
        { id: 15, project_name: 'HnM mobile app', status: 'On track', last_update: '15 Mar 2021, 12:47 PM', resources: '3', project_timeline: '15 May 2021>15 Aug 2021', estimate:'US$ 10.5k' }
    ];

    //   const [post, setPost] = useState([]);
    //   const api = axios.create({
    //     baseURL: `https://31cfa0ba-31dc-4837-900e-69712faa41a9.mock.pstmn.io`
    //   });
    // useEffect(() => {
    //     api.get("/projects").then((response) => {
    //         console.log('response.data',response.data);
    //         setPost(response.data);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, []);
    // const emptyArray=[];
    // emptyArray.push(post);
    // console.log('post data is',post);
    // console.log('emptyArray',emptyArray);
    const columns = [
        { dataField: 'id', text: '#', sort: true },
        { dataField: 'project_name', text: 'PROJECT NAME', sort: true },
        { dataField: 'status', text: 'STATUS', sort: true },
        { dataField: 'last_update', text: 'LAST UPDATE', sort: true },
        { dataField: 'resources', text: 'RESOURCES', sort: true },
        { dataField: 'project_timeline', text: 'PROJECT TIMELINE', sort: true },
        { dataField: 'estimate', text: 'ESTIMATE', sort: true }
      ];
    
    const sortDefault = [{
        dataField: 'id',
        order: 'asc'
      }];

      const pagination = paginationFactory({
        page: 2,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
      });

    const { SearchBar, ClearSearchButton } = Search; 
    return (
        <div>
             <ToolkitProvider
                bootstrap4
                keyField='id'
                data={products}
                columns={columns}
                search
            >
                {
                    props => (
                        <div>
                            <h6>Enter your search terms below:</h6>
                            <SearchBar { ...props.searchProps } />
                            <ClearSearchButton { ...props.searchProps } />
                            <hr />
                            <BootstrapTable 
                            defaultSorted={sortDefault} 
                            pagination={pagination}
                            { ...props.baseProps }
                            />
                        </div>
                    )
                }            
            </ToolkitProvider>
            {/* <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={sortDefault} pagination={pagination} /> */}
        </div>
    );
};

export default BootstrappedTable;