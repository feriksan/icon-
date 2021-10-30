# How to use API
List Panggilan API

## Mitra
Sub Topic Headings H2 is used for sub sections like Configurations, Authors etc.

Mitra
1. Get All Mitra: adress:port/mitra
2. Get Mitra By Id: adress:port/mitra/{id}
3. Get Mitra By Username: adress:port/mitraByUsername/{username}
4. Save MitraBatch: adress:port/mitra/saveBatch
```javascript
    {
        "username": "Suisei",
        "namaMitra": "saasababababa",
        "alamat": "aruaaru",
        "jabatan": "aaaassasas",
        "noHP": "111111111111",
        "email": "ikhsanansyah@gmail.com",
        "pic": "aaabb",
        "timData": [
            {
                "namaTim": "Arumi"
            },
            {
                "namaTim": "megaton"
            }
        ]
    }
```

5. Delete Mitra: adress:port/mitra/deleteMitra/{id}

Tim
1. Get All Tim: adress:port/tim
2. Get Tim By Id: adress:port/tim/{id}
3. Delete Tim: adress:port/tim/deleteTim/{id}

User
1. Get All User: adress:port/icon
2. Get User: adress:port/icon/user/{username}
3. Save User: adress:port/icon/save
```javascript
{
    "email": "ferdicool95@gmail.com",
    "noHP": "111111111111",
    "namaLengkap": "feriksan",
    "wilayahKerja": "jakarta",
    "jabatan": "presied",
    "usersByUsername": {
        "username": "icon admin",
    }
}
```
4. Update User: adress:port/icon/iconUpdate/{id}
```javascript
    {
        "email": "ferdicool95@gmail.com",
        "noHP": "111111111111",
        "namaLengkap": "feriksan",
        "wilayahKerja": "jakarta",
        "jabatan": "presied",
    }
```
5. Delete User: adress:port/icon/deleteIcon/{id}

History
1. Get All History: adress:port/history/list
2. Get Detail History: dress:port/history/listDetail/{idHistory}

PA
1. Get All PA: adress:port/crm
2. Get PA By Id: adress:port/crm/{id}
3. Upload PA: adress:port/crm/uploadCrm

```html
    formData.append('excel',file);
```
4. Delete CRM: adress:port/crm/deleteCRM/{id}

Dispose Mitra:
1. Get All Dispose: adress:port/disposisiMitra
2. Get Dispose By Id: adress:port/disposisiMitra/{id}
3. Batch Dispose Mitra: adress:port/disposisiMitra/batchSave
```javascript
[
    {
        "crmById": {
            "id": 51
        },
        "mitraById": {
            "id": 7
        },
        "topic": null
    },
        {
        "crmById": {
            "id": 51
        },
        "mitraById": {
            "id": 5
        },
        "topic": null
    }
]
```

