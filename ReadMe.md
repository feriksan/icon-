# How to use API
List Panggilan API

## Mitra
Sub Topic Headings H2 is used for sub sections like Configurations, Authors etc.

Mitra
1. Get All Mitra: adress:port/mitra
2. Get Mitra By Id: adress:port/mitra/{id}
3. Get Mitra By Username: adress:port/mitraByUsername/{username}
4. Save MitraBatch: adress:port/user/mitra/save
```javascript
    {
        "namaMitra": "aaa",
        "alamat": "aaa",
        "jabatan": "aaa",
        "usernameByMitra": {
            "username": "Suisei4"
        },
        "noHP": "111111111111",
        "email": "ikhsanansyah@gmail.com",
        "pic": "aaa",
        "personData": [
            {
                "noHp": "212121212",
                "namaPerson": "person Mitra 4 1",
                "email": "email@gmail.com"
            },
                        {
                "noHp": "212121212",
                "namaPerson": "person Mitra 4 2",
                "email": "email@gmail.com"
            },
                        {
                "noHp": "212121212",
                "namaPerson": "person Mitra 4 3",
                "email": "email@gmail.com"
            }
        ]
    }
```
5. Add Mitra Person: adress:port/addPersonMitra/{id_mitra}
```javascript
[
    {
        "noHp": "212121212",
        "namaPerson": "person 1",
        "email": "email@gmail.com"
    },
    {
        "noHp": "212121212",
        "namaPerson": "person 3",
        "email": "email3@gmail.com"
    },
    {
        "noHp": "212121212",
        "namaPerson": "person Mitra 3",
        "email": "email@gmail.com"
    },
    {
        "noHp": "212121212",
        "namaPerson": "person Mitra 4 1",
        "email": "email@gmail.com"
    },
    {
        "noHp": "212121212",
        "namaPerson": "person Mitra 4 2",
        "email": "email@gmail.com"
    },
    {
        "noHp": "212121212",
        "namaPerson": "person Mitra 4 3",
        "email": "email@gmail.com"
    }
]
```

6. Delete Mitra: adress:port/mitra/deleteMitra/{id}

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

Laporan Aktivasi:
1. Get All Laporan Aktivasi: adress:port/attach/laporan
2. Upload Laporan Aktivasi: adress:port/uploadLaporan
```javascript
{
    "boq": "download (9).jpg",
    "noPA": {
        "id":59
    },
    "mitraByLaporan": {
        "id": 7
    }
}
```

Verifikasi
1. Get All Laporan Aktivasi: adress:port/attach/verifikasi
2. Upload Laporan Aktivasi: adress:port/uploadVerifikasi
```javascript
{
    "hasilVerifikasi": "Test Data",
    "catatan": "BOM SURVEY COMMONWEALTH BANK CABANG MALANG Jl. Jaksa Agung Suprapto.xlsx",
    "gdb": "batch insert.txt",
    "noPA": {
        "id":59
    },
    "mitraByVerifikasi": {
        "id": 7
    }
}
```

Survei
1. Get All Laporan Aktivasi: adress:port/attach/survei
2. Upload Laporan Aktivasi: adress:port/uploadSurvei
```javascript
{
    "dokumentasiSurvei": "download (1).jpg",
    "formulirIjinKerja": "Test Kerja",
    "surveiBom": "Test Survei",
    "gdb": "xifjjdv9gw251.jpg",
    "surveiByFoto": [
            {
                "fileName": "foto4"
            },
            {
                "fileName": "foto5"
            }
    ],
    "noPA": {
        "id":59
    },
    "mitraBySurvei": {
        "id": 7
    }
}
```
