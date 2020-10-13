import React from 'react' 

class Button extends React.Component {
    state = {
        like: 0

    }
    handleClick = () => {
        // this.setState(previousState => ({
        //     like: previousState.like + 1
        // }))

        console.log('a');

        fetch('http://localhost:3000/api/v1/blog_postssdfjkldjflss')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e')

        // a,d,e
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Click Me:</button> {this.state.like}
            </div>
        )
    }
}
export default Button