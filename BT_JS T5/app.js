var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143A",
    price:"280.000",
    image:"https://routine.vn/media/amasty/webp/magefan_blog/goi-y-cach-phoi-do-cung-quan-kaki-nam-ong-dung-chuan-dep-nhat_jpg.webp"

    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC133",
    price:"300.000",
    image:"https://yeepvn.sgp1.digitaloceanspaces.com/2023/03/96a44a418646b9cae848dd561848e7b7.jpg"
    },
    {
    id:3,
    name:"Áo cộc tay nam",
    code:"TC223",
    price:"250.000",
    image:"https://product.hstatic.net/200000805931/product/__-01_7ef5cef9ec4b45458464c83a111c7b49_master.jpg"

    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC233",
    price:"200.000",
    image:"https://xuatnhapkhautheoyeucau.com/wp-content/uploads/2020/01/O1CN01W5FASi1wKrk9ZAfVM_0-item_pic.jpg_430x430q90.jpg"

    }

]
var women=[
    {
    id:1,
    name:"váy ",
    code:"TC321",
    price:"250.000",
    image:"https://kenh14cdn.com/thumb_w/620/2020/5/18/photo-1-1589772211959396606782.jpeg"

    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC213",
    price:"200.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC322",
    price:"270.000",
    image:"https://product.hstatic.net/1000311467/product/ahd2-1_385058991a9a45c4a31c976356ab7be6_master.jpg"

    },
    {
    id:4,
    name:"Áo thun",
    code:"TC221",
    price:"100.000",
    image:"https://dosi-in.com/file/detailed/232/dosiin-davies-ao-thun-nu-form-rong-tay-lo-mau-den-cotton-davies-232119232119.jpg?w=1000&h=1000&fit=fill&fm=webp"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    }