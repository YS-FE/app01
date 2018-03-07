<script>
export default {
  render: function ( createElement ){
    return createElement ( "h1",{
      attrs: {
        id: 'hello'
      },
      on: {
        click: function(event){
          alert('I am helloworld!');
        }
      }
    }, "helloworld" );
  },
}
</script>

<style>
</style>
