class student{
    constructor(name)
    {
        this.name = name;
    }
    display()
    {
        console.log("name "+this.name);
    }
}
let s = new student("Nikki");
s.display();