type Excludes = 'click' | 'scroll' | 'click' | 'mousemove';

// it Excludes the 'scroll' from the Excludes type
// more specific we can say whenever scroll event comes it will be excluded from the type
type ExcludesEvent = Exclude<Excludes,'scroll'>;

function handleEvent(event: ExcludesEvent){
    console.log("Include event is ",event);
}

handleEvent('click');
// handleEvent('scroll'); // uncomment this line and see the error