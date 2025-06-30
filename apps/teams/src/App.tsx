import { add } from '@mono/utils';
import Banner from '@ui/Banner';
import H1 from '@ui/H1';
import { Button } from '@ui/components/ui/button';

type TProps = {
  instanceName: string;
};

const t: TProps = {
  instanceName: 'Teams'
};
console.log('🐔 =>  t:', t);

function App() {
  console.log('🐔 =>  add(1, 2):', add(1, 2));

  return (
    <>
      <div className='flex text-5xl'>Teams</div>
      <Banner instanceName='Teams' />
      <H1 />
      <Button>CC</Button>
    </>
  );
}

export default App;
