const {createApp} = Vue;

const data ={
    name : 'Ahmad',
    age : 22
};

const my_component = {
    template : `<h2>Hello This is first Component</h2>
                <h3> My Name {{name}} </h3>
                <h3> My Age {{age}} </h3>
                <button @click="changeAge">IncreseAge</button>`,
    data (){
        return data
    },
    methods : {
        changeAge(){
            this.age ++;
        }
    }
};



const v1 = createApp({
    
    
    data() {
        return {
            products : [
                {
                    title : "title 1",
                    description : "description 1",
                    price : 1111,
                    brands : "min 1",
                    colors : ['red' ,  'blue' , 'green'  ,'black'],
                    id : 1
                },
                {
                    title : "title 2",
                    description : "description 2",
                    price : 2222,
                    brands : "min 2",
                    colors : ['red' ,  'blue' , 'green'  ,'black'],
                    id : 2
                },
                {
                    title : "title 3",
                    description : "description 3",
                    price : 3333,
                    brands : "min 3",
                    colors : ['red' ,  'blue' , 'green'  ,'black'],
                    id : 3
                },
                {
                    title : "title 4",
                    description : "description 4",
                    price : 4444,
                    brands : "min 4",
                    colors : ['red' ,  'blue' , 'green'  ,'black'],
                    id : 4
                },
            ],


            array : [
                {
                id : 1,
                name : "ahmad",
                age : 54654,
                city : "cairo"
                },
                {
                    id : 2,
                    name : "ssss",
                    age : 45435,
                    city : "zzzz"
                    },
                    {
                        id : 3,
                        name : "ddd",
                        age : 324234,
                        city : "zzzz"
                        },
                        {
                            id : 4,
                            name : "fff",
                            age : 25234,
                            city : "zzzzz"
                            },
        ],
            students : ['ahmad' , 'ali' , 'salah' , 'fadi'],
            title : "test",
            myColor : "red" ,
            myFont : 15, 
            numberOne : 0,
            numberTwo : 0,
            'username' : "",
            'email' : '',
            'password' : '',
            'city' : 'Cairo',
            'age'  :  25 , 
            'link' : "https://www.facebook.com/",
            'number' : 0
        }
    },
    components : {
        my_component,
    },

    computed:{
        numOneChange(){
            console.log("first function fired ")
            return this.numberOne * 2
        },
        numTwoChange(){
            console.log("second function fired ")
            return this.numberTwo * 2
        },

    },
    methods: {
        checkRef(){
            this.age = this.$refs.myInput.value;
        },
        sendData() {
            const newUser = {
                'username' : this.username,
            'email' : this.email,
            'password' : this.password,
            }
            console.log(`newUser` , newUser);
        },
        updateValue() {
            this.name = document.getElementById("textInp").value;
        },
        printMyMe() {
            console.log('Ahmad');
        },
        testMe() {
            console.log(1111111)
        },
        testFunction(){
            this.number++;
        },
        sayHi(time , name) {
            return "Good " + time  + " , " + name ;
        }
    }

}).mount("#app-root");


const v2 = createApp({
    data(){
        return {
            name : 'Ahmad' ,
            students  :['ahmad' , 'sami' , 'fadi'],
        };
    },
    components : {
        my_component,
    },

    methods:{
        incressAge(){
            v1.age ++;
        },
    }

}).mount("#app-root2");