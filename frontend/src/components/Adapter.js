
// import React, { Component } from 'react';

class Adapter
{
    static getData(url, id = '')
    {
        url = id ==='' ? url : `${url}/${id}`
        return fetch(url).then(res=>res.json())
    }

    static createData(url,data)
    {
        const option = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(data)
        }
        return fetch(url,option).then(res=>res.json())
    }

    static editData(url, id,data) {
      url = `${url}/${id}`;
      console.log('editData : ' + url)
      const options = {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
      }
      return fetch(url, options)
          .then(res => res.json())
  }

    static updateData(url, data)
    {
        // debugger
        console.log('editData : ' + url)
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": Authorization
            },
            body: JSON.stringify(data)
        }
        return fetch(url, options).then(res => res.json())
    }

    static deleteData(url,id)
    {
        url = `${url}/${id}`

        const option = {
            method: "DELETE"
        }
        return fetch(url,option).then(res=>res.json())
    }
}

export default Adapter;