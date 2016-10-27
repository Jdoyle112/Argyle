import { Injectable }      from '@angular/core';
import { Http, Headers }   from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GroupsService {
	constructor(private http:Http){
		console.log('task service init..');
	}

    getGroups(){
        return this.http.get('/api/groups')
            .map(res => res.json());
    }

    addGroup(newGroup){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/newgroup', JSON.stringify(newGroup), {headers: headers})
			.map(res => res.json());	
	}

	deleteGroup(id){
		return this.http.delete('/api/deletegroup/'+id)
			.map(res => res.json());
	}
}