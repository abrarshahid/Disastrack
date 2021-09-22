const DecisionTable = ({prediction}) => {
    if(prediction === "safe"){
    return (
        <table>
    <tr>
    <th>Personal</th>
    <th>Business</th>
    <th>Agricultural</th>
    </tr>
    <tr>
    <td>You can move around freely</td>
    <td>It will be ok if you do offline business</td>
    <td>You can keep nurturing your crops</td>
    </tr>
    <tr>
    <td>You shouldn't afraid of disasters now</td>
    <td>No need to create new decisions for disasters </td>
    <td>You may harvest new crops</td>
    </tr>
    </table>

    );}
    else if(prediction === "disaster"){
        return(
            <table>
    <tr>
    <th>Personal</th>
    <th>Business</th>
    <th>Agricultural</th>
    </tr>
    <tr>
    <td>Go to a safe shelter as quickly as possible</td>
    <td>Close your business and take shelter in safe places</td>
    <td>Don't try to cut your crops now, rather save your life</td>
    </tr>
    <tr>
    <td>Stay in safe shelter untill the disaster ends</td>
    <td>Don't open the office untill the disaster ends</td>
    <td>Stay away from agricultural activities during disaster</td>
    </tr>
    <tr>
    <td>Try to take some dry foods along with you in the safe shelter</td>
    <td></td>
    <td></td>
    </tr>
    </table>


        );
    }
}

export default DecisionTable;