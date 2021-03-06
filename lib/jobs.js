/**
 * This object holds the information about a job that the worker is to perform.
 * This object is used by the Worker to preform an action that is requested by
 * the Job server.
 *
 * @author znanja, inc
 */
function Jobs(name, func)
{
	this.jobs = [];
}

Jobs.prototype.push = function(name, func, context)
{
	if(!(func instanceof Function))
	{
		throw Error('You must pass a function as a job parameter');
	}

	var _job = {
		name:	 name,
		func:	 func,
		context: context
	};
	this.jobs.push(_job);
};

Jobs.prototype.find = function(name)
{
	var _func;

	this.jobs.some(function(_job)
	{
		if(_job.name == name)
		{
			_func = _job;
			return true;
		}
	});

	if(!(_func.func instanceof Function))
	{
		throw Error("Cannot find function for Job");
	}

	return _func;
};

exports.Jobs = Jobs;
