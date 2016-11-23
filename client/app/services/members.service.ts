import { Injectable }      from '@angular/core';
import { Http, Headers }   from '@angular/http';
import {Auth} from './auth.service';
import {AuthHttp} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class MembersService {
	constructor(private http:Http){
	}


	getMembers(id){
        return this.http.get('/api/members/'+id)
            .map(res => res.json());
    }

	addMember(newMember){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/members/newmember', JSON.stringify(newMember), {headers: headers})
			.map(res => res.json());	
	}

}