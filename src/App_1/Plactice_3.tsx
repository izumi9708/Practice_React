import * as React from 'react';

// APIからデータを取得し、取得したデータをリスト表示するアプリを作成してください。
export default function Plactice_3(){
  const [profile,setProfile] = React.useState<ApiObj>({});

  async function getApi():Promise<ApiObj>{
    try {
      const result = await fetch('https://api.github.com/users/izumi9708');
      return result.json();
    }catch(error){
      console.error(error);
    }
  }

  type ApiObj = {
    id?:number;
  }

  React.useEffect(() => {
    getApi().then(res => setProfile(res));
  },[])


  return (
    <div style={{marginTop:'30px'}}>
      {profile.id}
    </div>
  )
}