var CreateProductComponent = React.createClass({

});

var MainApp = React.createClass({
    render: function() {
        return <CreateProductComponent />;
    }
});

ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);

