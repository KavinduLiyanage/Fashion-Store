import React from "react";
import './AdminHome.css';

export default class AdminHome extends React.Component{
    render() {
        return(
            <div style={{ marginTop: 55 }}>
                <div className="sidenav" style={{ marginTop: 55 }}>
                    <a href="/admin">Admin Home</a>
                    <a href="/addStoreMng">Add Store Manager</a>
                    <a href="/addCategory">Create Category</a>
                </div>

                <div className="main">
                    <h2>Admin Home</h2>
                    <p>This sidebar is of full height (100%) and always shown.</p>
                    <p>Scroll down the page to see the result.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                    <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
                        concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis
                        evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no
                        molestiae voluptatibus.</p>
                </div>
            </div>
        );
    }
}