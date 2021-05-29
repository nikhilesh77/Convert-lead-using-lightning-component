({
    
    leadwithcheckbox : function(component, event, helper) {
        
        var action =component.get("c.getLeadWithCheckbox");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                
                component.set("v.leadWrapper", response.getReturnValue());
            }
        });
        //$A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    },
    
    
    
    convertLead : function(component, event, helper){
        
        var leadWrapper = component.get("v.leadWrapper");
        
        var action = component.get("c.convertSelectedLead");
        var check = false;
        console.log(check);
        var selectedLead = new Array();
        for(var i=0; i < leadWrapper.length; i++){
            if(leadWrapper[i].isBoolean){
                
                selectedLead.push(leadWrapper[i].leadObj);
            }
        }
        action.setParams({
            "selectedLead":selectedLead, "checkValue":check
        })
        if(selectedLead.length > 0){
            action.setCallback(this, function(response){
                
                var state = response.getState();
                if (state === "SUCCESS") {
                    alert('Lead is converted sucessfully.');
                    location.reload();
                }
                else{
                    alert('Error occurred while converting lead.');
                }
            });
        }else{
            alert('Please select any Lead');
        }
        $A.enqueueAction(action);
    },
    
    
    convertLeadToAccountAndContact : function(component, event, helper){
        
        var leadWrapper = component.get("v.leadWrapper");
        
        var action = component.get("c.convertSelectedLead");
        var check = true;
        console.log(check);
        var selectedLeadToAandC = new Array();
        for(var i=0; i < leadWrapper.length; i++){
            if(leadWrapper[i].isBoolean){
                
                selectedLeadToAandC.push(leadWrapper[i].leadObj);
            }
        }
        action.setParams({
            "selectedLead":selectedLeadToAandC, "checkValue":check
        })
        if(selectedLeadToAandC.length > 0){
            action.setCallback(this, function(response){
                
                var state = response.getState();
                if (state === "SUCCESS") {
                    alert('Lead is converted sucessfully.');
                    location.reload();
                }
                else{
                    alert('Error occurred while converting lead.');
                }
            });
        }else{
            alert('Please select any Lead');
        }
        $A.enqueueAction(action);
    }
    
})