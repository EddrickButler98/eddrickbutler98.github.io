function StaffMember(name, discountPercent) { this.name = name; this.discountPercent = discountPercent; }
var me = new StaffMember("Timmy", 20);
console.log(me);

 var cashRegister = {
    "total": 0,
    "lastTransactionAmount": 0,
    "numItems": 0,  
    //adding items
    "add": function(itemCost) { this.total += itemCost; this.lastTransactionAmount = itemCost; /*this.numItems += quantity;*/}, 
    //scanning items
    "scan": function(item, quantity) {
        switch(item) {
            case "Mafia 3": this.add(60.00 * quantity); break;
            case "Farcry Primal": this.add(60.00 * quantity); break; 
            case "Uncharted 4": this.add(60.00 * quantity); break;
            case "Call of Duty: Infinite Warfare": this.add(60.00 * quantity); break;
            case "NHL 17": this.add(60.00 * quantity); break;
            case "Mafia 2": this.add(18.00 * quantity); break;
            case "GTA 5": this.add(60.00* quantity); break;
            case "GTA 4": this.add(20.00 * quantity); break; 
        }
    },
    //void last transaction
    "voidLastTransaction": function() { this.total -= this.lastTransactionAmount; },
    // apply discount
    "applyStaffDiscount": function(employee) { this.total *= ((100 - employee.discountPercent)/100) }
 }

function showTotal() {
    document.getElementById('total').innerHTML = "Your total is: $"+ cashRegister.total.toFixed(2); 
}